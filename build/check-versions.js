'use strict'
// chalk:用来在命令行输出不同颜色文字的包，可以使用chalk.yellow("想添加颜色的文字...")
// 来实现改变文字颜色的
const chalk = require('chalk')
// semver:语义化版本文件的npm包，用来控制版本
const semver = require('semver')
const packageConfig = require('../package.json')
// 用来执行unix命令的包
const shell = require('shelljs')

// child_process是Node.js提供了衍生子进程功能的模块，execSync()方法同步执行一个cmd命令
// 将返回值调用toString和trim方法
function exec (cmd) {
  return require('child_process').execSync(cmd).toString().trim()
}

const versionRequirements = [
  // semver.clean()方法返回一个标准的版本号，切去掉俩边空格，比如semver.clean(" =v1.2.3 ")
  // 返回1.2.3
  {
    name: 'node',
    currentVersion: semver.clean(process.version),
    versionRequirement: packageConfig.engines.node
  }
]
// shell.which是去环境变量搜索有没有参数这个命令
if (shell.which('npm')) {
  versionRequirements.push({
    name: 'npm',
    // 执行 'npm --version'命令
    currentVersion: exec('npm --version'),
    versionRequirement: packageConfig.engines.npm
  })
}

module.exports = function () {
  const warnings = []

  for (let i = 0; i < versionRequirements.length; i++) {
    const mod = versionRequirements[i]

    if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
      warnings.push(mod.name + ': ' +
        chalk.red(mod.currentVersion) + ' should be ' +
        chalk.green(mod.versionRequirement)
      )
    }
  }

  if (warnings.length) {
    console.log('')
    console.log(chalk.yellow('To use this template, you must update following to modules:'))
    console.log()

    for (let i = 0; i < warnings.length; i++) {
      const warning = warnings[i]
      console.log('  ' + warning)
    }

    console.log()
    process.exit(1)
  }
}
