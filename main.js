function percentage(partialValue, totalValue) {
	return (100 * partialValue) / totalValue;
}
Array.prototype.max = function () {
	return Math.max.apply(null, this);
};

Array.prototype.min = function () {
	return Math.min.apply(null, this);
};

class BarChart {
	constructor(elm, data) {
		const c = document.querySelector(elm);
		const ctx = c.getContext("2d");
		for (let i = 0; i < data.length; i++) {
			var h = percentage(data[i], data.max());
			var randomColor = Math.floor(Math.random() * 16777215).toString(16);
			ctx.fillStyle = "#" + randomColor;

			ctx.fillRect(
				i * (c.width / data.length),
				c.height - h,
				c.width / data.length,
				h
			);
		}
	}
}

bc1 = new BarChart("#chart",[24,122,244,345,222,521,122]);
