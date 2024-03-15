const path = require('path');
const execa = require('execa');

const eslintPath = path.resolve(__dirname, '../node_modules/.bin/eslint');
const stylelintPath = path.resolve(__dirname, '../node_modules/.bin/stylelint');

const runEslint = async (rootName, targetName) => {
  const rootPath = path.resolve(__dirname, 'fixtures', rootName);

  try {
    return await execa(
      eslintPath,
      [
        `${rootPath}/${targetName}`,
        '--ext',
        '.vue,.js,.ts',
        '-c',
        `${rootPath}/.eslintrc.js`
      ],
      {
        cwd: rootPath,
      }
    );
  } catch (e) {
    return e;
  }
}

const runStylelint = async (rootName, targetName) => {
  const rootPath = path.resolve(__dirname, 'fixtures', rootName);

  try {
    return await execa(
      stylelintPath,
      [
        `${rootPath}/${targetName}/**/*.css`,
        '-c',
        `${rootPath}/.stylelintrc.js`
      ],
      {
        cwd: rootPath,
      }
    );
  } catch (e) {
    return e;
  }
}

describe('default', () => {
  test('success', async () => {
    const { stdout } = await runEslint('default', 'src/correct');
    expect(stdout).toBe('');
  })
})

describe('typescript', () => {
  test('success', async () => {
    const { stdout } = await runEslint('typescript', 'src/correct');
    expect(stdout).toBe('');
  })

  test('no-unused-vars', async () => {
    const { stdout } = await runEslint('typescript', 'src/incorrect');
    expect(stdout).toMatch('@typescript-eslint/no-unused-vars');
  })
})

describe('vue', () => {
  test('success', async () => {
    const { stdout } = await runEslint('vue', 'src');
    expect(stdout).toBe('');
  })
})

describe('style', () => {
  test('success', async () => {
    const res = await runStylelint('style', 'src/correct');
    expect(res.failed).toBeFalsy();
  })

  test('comment-no-empty', async () => {
    const res = await runStylelint('style', 'src/incorrect');
    expect(res.failed).toBeTruthy();
    expect(res.message).toMatch('comment-no-empty');
  })
})
