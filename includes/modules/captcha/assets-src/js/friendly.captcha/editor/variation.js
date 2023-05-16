const {
	      __,
      } = wp.i18n;

const variation = {
	name: 'friendly',
	title: __( 'Friendly Captcha', 'jet-form-builder' ),
	isActive: ( blockAttributes, variationAttributes ) => (
		blockAttributes.provider === variationAttributes.provider
	),
	description: __(
		`Friendly Captcha is a powerful anti-spam service that 
blocks spam-bots without annoying captcha images and protects user privacy.`,
		'jet-form-builder',
	),
	icon: <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M49.7875 46.6163C50.1279 46.1814 50.0512 45.5529 49.6163 45.2125C49.1814 44.8721 48.5529 44.9487 48.2125 45.3837L45.0179 49.4657L43.7289 48.0932C43.3509 47.6906 42.718 47.6707 42.3154 48.0488C41.9128 48.4269 41.893 49.0597 42.2711 49.4623L43.959 51.2597C44.5884 51.9299 45.6671 51.8813 46.2337 51.1573L49.7875 46.6163Z" fill="#0F172A"/>
		<path fillRule="evenodd" clipRule="evenodd" d="M50.2929 14.9131C50.6834 14.5226 50.6847 13.8877 50.2786 13.5133C45.7446 9.33346 39.7941 7 33.603 7C20.0242 7 9 18.0242 9 31.603C9 45.1818 20.0242 56.206 33.603 56.206C35.5725 56.206 37.5176 55.9699 39.4005 55.5133C41.1615 57.0613 43.4711 58 46 58C51.5229 58 56 53.5229 56 48C56 42.4772 51.5229 38 46 38C40.4772 38 36 42.4772 36 48C36 48.2199 36.0071 48.4382 36.0211 48.6546C35.2246 48.7675 34.4168 48.8251 33.603 48.8251C24.0979 48.8251 16.3809 41.1081 16.3809 31.603C16.3809 22.0979 24.0979 14.3809 33.603 14.3809C37.8363 14.3809 41.9089 15.9394 45.0536 18.7388C45.4661 19.106 46.0975 19.1085 46.488 18.718L50.2929 14.9131ZM36.3489 50.6281C35.4448 50.7586 34.5273 50.8251 33.603 50.8251C29.115 50.8251 24.9843 49.284 21.7118 46.7025L19.3079 49.1064C23.2042 52.2932 28.1821 54.206 33.603 54.206C35.0402 54.206 36.4632 54.0692 37.8548 53.8026C37.1779 52.8543 36.6626 51.7827 36.3489 50.6281ZM33.603 9C38.9274 9 44.0581 10.8786 48.1089 14.2687L45.7072 16.6704C42.2994 13.9079 38.0299 12.3809 33.603 12.3809C22.9933 12.3809 14.3809 20.9933 14.3809 31.603C14.3809 37.0044 16.6131 41.8881 20.2046 45.3813L17.8147 47.7712C13.6112 43.6656 11 37.9366 11 31.603C11 19.1288 21.1288 9 33.603 9ZM38 48C38 43.5817 41.5817 40 46 40C50.4183 40 54 43.5817 54 48C54 52.4183 50.4183 56 46 56C41.5817 56 38 52.4183 38 48Z" fill="#0F172A"/>
		<path d="M26.2222 35.2935C28.2604 35.2935 29.9126 33.6412 29.9126 31.603C29.9126 29.5648 28.2604 27.9126 26.2222 27.9126C24.184 27.9126 22.5317 29.5648 22.5317 31.603C22.5317 33.6412 24.184 35.2935 26.2222 35.2935Z" fill="#0F172A"/>
		<path d="M40.9839 35.2935C43.0221 35.2935 44.6744 33.6412 44.6744 31.603C44.6744 29.5648 43.0221 27.9126 40.9839 27.9126C38.9457 27.9126 37.2935 29.5648 37.2935 31.603C37.2935 33.6412 38.9457 35.2935 40.9839 35.2935Z" fill="#0F172A"/>
	</svg>,
	scope: [ 'block', 'inserter' ],
	attributes: {
		'provider': 'friendly',
	},
};

export default variation;