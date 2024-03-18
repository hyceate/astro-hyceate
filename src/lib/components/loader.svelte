<script>
	/**
	 * scaleLength will take a valid CSS length and ratio to scale
	 * @param {string} length
	 * @param {number} ratio
	 * @returns {string}
	 */
	export function scaleLength(length, ratio = 1) {
		const result = (length + '').trim().match(/^([\d.]+)([a-z]*)$/);

		if (!result)
			throw new TypeError('Invalid length, must be a number followed by a unit without spaces.');

		const [num, unit] = result.splice(1, 2);

		return `${num * ratio}${unit || 'px'}`;
	}

	export let width = '200px';
	export let height = '200px';
	export let color = '#4c0519';

	let aspectRatio = 1;

	if ($$props.width && !$$props.height) height = scaleLength(width, 1 / aspectRatio);
	if ($$props.height && !$$props.width) width = scaleLength(height, aspectRatio);
</script>

<!-- By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL -->
<svg
	{width}
	{height}
	stroke={color}
	{...$$restProps}
	viewBox="0 0 44 44"
	xmlns="http://www.w3.org/2000/svg"
>
	<g fill="none" fill-rule="evenodd" stroke-width="2">
		<circle cx="22" cy="22" r="1">
			<animate
				attributeName="r"
				begin="0s"
				dur="1.8s"
				values="1; 20"
				calcMode="spline"
				keyTimes="0; 1"
				keySplines="0.165, 0.84, 0.44, 1"
				repeatCount="indefinite"
			/>
			<animate
				attributeName="stroke-opacity"
				begin="0s"
				dur="1.8s"
				values="1; 0"
				calcMode="spline"
				keyTimes="0; 1"
				keySplines="0.3, 0.61, 0.355, 1"
				repeatCount="indefinite"
			/>
		</circle>
		<circle cx="22" cy="22" r="1">
			<animate
				attributeName="r"
				begin="-0.9s"
				dur="1.8s"
				values="1; 20"
				calcMode="spline"
				keyTimes="0; 1"
				keySplines="0.165, 0.84, 0.44, 1"
				repeatCount="indefinite"
			/>
			<animate
				attributeName="stroke-opacity"
				begin="-0.9s"
				dur="1.8s"
				values="1; 0"
				calcMode="spline"
				keyTimes="0; 1"
				keySplines="0.3, 0.61, 0.355, 1"
				repeatCount="indefinite"
			/>
		</circle>
	</g>
</svg>
