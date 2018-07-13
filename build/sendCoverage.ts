import * as shell from 'shelljs';

if (shell.env['CODACY_PROJECT_TOKEN']) {
    shell.exec('cat ./coverage/lcov.info | codacy-coverage');
} else {
    shell.echo('unable to find codacy token, skipping code coverage transmission');
}