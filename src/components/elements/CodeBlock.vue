<template>
	<div class="code-block-container">
		<div class="text-right copy-code-container">
			<div v-if="!hideButton" class="copy-code-button" @click="copyCode">
				<v-icon class="me-2" :class="iconClass" :icon="buttonIconValue" />
				{{ buttonTextValue }}
			</div>
		</div>

		<div>
			<pre :class="`language-${lang}`">
<code :class="`language-${lang}`" v-html="renderCode"></code>
			</pre>
		</div>
	</div>
</template>

<script>
import Prism from 'prismjs';


export default {
	name: 'CodeBlock',
	props: {
		code: {
			type: [Object, Array, String, Number],
			required: true,
		},
		copyIcon: {
			type: String,
			required: false,
			default: 'mdi mdi-content-copy',
		},
		copyText: {
			type: String,
			required: false,
			default: 'Copy Code',
		},
		failedIcon: {
			type: String,
			required: false,
			default: 'mdi mdi-close',
		},
		hideButton: {
			type: Boolean,
			required: false,
			default: false,
		},
		indent: {
			type: Number,
			required: false,
			default: 4,
		},
		lang: {
			type: String,
			required: false,
			default: 'javascript',
		},
		successIcon: {
			type: String,
			required: false,
			default: 'mdi mdi-check',
		},
	},
	data: () => ({
		buttonIconValue: '',
		buttonTextValue: '',
		convertedCode: '',
		copying: false,
		html: '',
		iconClass: 'mdi-content-copy',
		themeUpdated: false,
	}),
	computed: {
		renderCode() {
			this.convertCode();
			const html = Prism.highlight(this.convertedCode, Prism.languages[this.lang], this.lang);

			return html;
		},
	},
	created() {
		this.buttonTextValue = this.copyText;
		this.buttonIconValue = this.copyIcon;

	},
	methods: {
		convertCode() {
			if (this.lang === 'json') {

				this.convertedCode = JSON.stringify(this.code, null, this.indent);
				return false;
			}

			this.convertedCode = this.code;
			return false;
		},
		copyCode() {
			if (this.copying) {
				return false;
			}

			this.copying = true;

			navigator.clipboard.writeText(this.convertedCode).then(() => {
				this.buttonIconValue = this.successIcon;
				this.buttonTextValue = 'Copied!';
				this.iconClass = 'mdi-check';
			}, (err) => {
				this.buttonIconValue = this.failedIcon;
				this.buttonTextValue = 'Copy failed!';
				this.iconClass = 'mdi-close';
				console.error('Copy to clipboard failed: ', err);
			});

			setTimeout(() => {
				this.buttonIconValue = this.copyIcon;
				this.buttonTextValue = this.copyText;
				this.iconClass = 'mdi-content-copy';
				this.copying = false;
			}, 3000);
		},
	},
};
</script>

<style lang="scss">
@import 'prism-themes/themes/prism-night-owl.css';

.code-block-container {
	display: block;
	max-width: 100%;
}

.copy-code-container {
	display: flex;
	justify-content: flex-end;
}

.copy-code-button {
	align-items: center;
	background-color: rgba(var(--v-theme-primary), 0.1);
	border-radius: 5px 5px 0 0;
	cursor: pointer;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	padding: 5px 15px;
	text-align: center;
	transition: background-color 0.35s ease;
	width: fit-content;

	&:hover {
		background-color: rgba(var(--v-theme-primary), 0.2);
	}

	.mdi {
		font-size: 14px !important;

		&-content-copy {
			color: rgb(var(--v-theme-primary)) !important;
		}

		&-check {
			color: rgb(var(--v-theme-success));
		}

		&-close {
			color: rgb(var(--v-theme-error));
		}
	}
}

pre {
	display: flex;

	&[class*='language-'] {
		background-color: #282c34;
		border-radius: 10px 0 10px 10px;
		margin-top: 0;
	}
}
</style>
