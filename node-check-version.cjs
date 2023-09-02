const { execSync } = require("child_process");
const semver = require("semver");
const { engines } = require("./package.json");
const terminalArguments = require("minimist")(process.argv.slice(2));

const runNpmVersionCheck = terminalArguments["run-npm-version-check"] ?? false;
let npmVersion;

const runYarnVersionCheck =
  terminalArguments["run-yarn-version-check"] ?? false;
let yarnVersion;

if (!semver.satisfies(process.version, engines.node)) {
  console.warn(
    `Required node version ${engines.node} not satisfied with current version ${process.version}.`,
  );

  process.exit(1);
}

if (runNpmVersionCheck) {
  npmVersion = `v${execSync("npm -v").toString().trim()}`;

  if (!semver.satisfies(npmVersion, engines.npm)) {
    console.warn(
      `Required npm version ${npmVersion} not satisfied with current version ${npmVersion}.`,
    );

    process.exit(1);
  }
}

if (runYarnVersionCheck) {
  yarnVersion = `v${execSync("yarn -v").toString().trim()}`;

  if (!semver.satisfies(yarnVersion, engines.yarn)) {
    console.warn(
      `Required yarn version ${yarnVersion} not satisfied with current version ${yarnVersion}.`,
    );

    process.exit(1);
  }
}

console.info(`Required node version is fulfilled ${process.version}`);

if (runNpmVersionCheck) {
  console.info(`Required npm version is fulfilled ${npmVersion}`);
}

if (runYarnVersionCheck) {
  console.info(`Required yarn version is fulfilled ${yarnVersion}`);
}
