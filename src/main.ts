import * as core from '@actions/core';
async function run (): Promise<void> {
	try {
		const secrets: any = JSON.parse(core.getInput('from'));
		const name: string = core.getInput('name');
		let exists = false;
		let value: string = '';
		Object.entries(secrets).forEach(([k, v]: any) => {
			const e = `${k.toLowerCase()}` == `${name.toLowerCase()}`;
			exists = exists || e;
			value = value || v;
			if (e) {
				core.setOutput('exists', exists);
				core.setOutput('value', value);
			}
		});
		if (!exists) {
			core.warning(`secrets.${name} is not exist`);
		}
	} catch (error) {
		if (error instanceof Error) core.setFailed(error.message);
	}
}

run();
