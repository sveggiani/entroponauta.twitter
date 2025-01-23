let data = {
	username: "unentroponauta", // No leading @ here
	homeLabel: "xol.ar",
	homeUrl: "https://xol.ar",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(data.homeUrl)}/`;

module.exports = data;