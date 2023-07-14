<script>
	import MyFace from '$lib/assets/myface.png';
	import Typewriter from 'svelte-typewriter';
</script>

<main
	class="relative min-h-screen w-full flex items-center justify-center text-white bg-hero-graph-paper-gray-700/35 bg-black overflow-hidden"
>
	<div class="max-w-screen-xl mx-auto flex gap-6 md:gap-8 p-8 py-16 flex-col md:flex-row z-10 items-center md:items-stretch">
		<img
			src={MyFace}
			class="aspect-square max-h-240px md:aspect-auto md:max-h-512px object-cover object-top  rounded-full md:rounded-4"
			alt=""
		/>
		<div class="bg-black/25 flex-1 rounded-4 p-6 sm:p-8 lg:p-12 border-orange/50 border-1 backdrop-blur-8 flex flex-col justify-between">
			<div class="text-white/80 text-sm sm:text-base">
				<Typewriter mode="scramble" scrambleDuration={2000} scrambleSlowdown={false}>
					<h1 class="text-2xl lg:text-4xl mb-6 font-semibold">
						Hello! My name is Rivo,
						a full-stack developer based in Tangerang, Indonesia 🇮🇩
					</h1>
					<p class="mb-2">
						I am a passionate Computer Science student at Universitas Multimedia Nusantara, with a
						strong dedication to learning and a proven track record in the online media industry. 
					</p>
					<p>
						Currently working as Web Developer in Food Sustainesia and Creative Lead in HMIF UMN.
					</p>
				</Typewriter>
			</div>
			<div class="mt-16 flex text-3xl items-center gap-6 flex-wrap">
				<a
					href="/RivoCV.pdf"
					class="flex items-center gap-3 bg-white rounded text-black hover:bg-orange-500 hover:text-white transition text-sm px-3 py-2"
				>
					<span class="i-material-symbols-file-open text-xl" /> Resume</a
				>
				<a
					href="https://linkedin.com/in/rivowowor/"
					target="_blank"
					class="hover:text-orange-400 transition"
				>
					<button class="i-mdi-linkedin block m-auto" />
				</a>
				<a
					href="https://github.com/itshiroto/"
					target="_blank"
					class="hover:text-orange-400 transition"
				>
					<button class="i-mdi-github block m-auto" />
				</a>
				<a
					href="https://instagram.com/itshiroto7/"
					target="_blank"
					class="hover:text-orange-400 transition"
				>
					<button class="i-mdi-instagram block m-auto" />
				</a>
			</div>
		</div>
	</div>
	<div class="absolute -top-32 right-12 w-32 h-768px bg-orange/50 rotate-45 blur-150" />
	<div class="hidden md:block absolute bottom-1 left-12 w-36 h-96 bg-orange/25 rotate-18 blur-96" />
</main>

<style>
</style>
