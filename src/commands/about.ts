import { author, homepage, name, version } from "../../package.json";

const debug = require("debug")("bot:about_command");

const about = () => (ctx: any) => {
	const message = `Lalaku`;
	debug(`Triggered "about" command with message`);

	return ctx.replyWithMarkdown(message);
};

export { about };
