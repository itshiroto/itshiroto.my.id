<script>
	import { fade, fly } from 'svelte/transition';
	import MyFace from '$lib/assets/myface.png';
	import Typewriter from 'svelte-typewriter';
	import { onMount } from 'svelte';
	import { cubicInOut, quintInOut } from 'svelte/easing';

	let visible = false;
	onMount(() => {
		visible = true;
	});
</script>

<main
	class="relative min-h-screen w-full flex items-center justify-center text-white bg-hero-graph-paper-gray-700/35 bg-black overflow-hidden"
>
	{#if visible}
		<div
			class="max-w-screen-xl mx-auto flex gap-6 md:gap-8 p-4 sm:p-8 py-16 flex-col md:flex-row z-10 items-center md:items-stretch"
		>
			<img
				in:fly={{ x: -50, duration: 1000, delay: 500, easing: quintInOut }}
				out:fade
				src={MyFace}
				class="aspect-square max-h-240px md:max-h-inherit md:aspect-auto md:max-w-320px object-cover object-top rounded-full md:rounded-4"
				alt=""
			/>
			<div
				class="bg-black/25 flex-1 rounded-4 p-6 sm:p-8 lg:p-12 border-orange/25 border-1 backdrop-blur-8 flex flex-col justify-between"
			>
				<div
					in:fly={{ x: -50, duration: 1000, delay: 200, easing: quintInOut }}
					class="text-white/80 text-sm sm:text-base"
				>
					<Typewriter mode="scramble" scrambleDuration={2000} scrambleSlowdown={false}>
						<h1 class="text-2xl mb-6 font-semibold">
							Hello! My name is Rivo, a full-stack developer based in Tangerang, Indonesia 🇮🇩
						</h1>
						<p class="mb-2">
							I am a passionate Computer Science student at Universitas Multimedia Nusantara, with a
							strong dedication to learning and a proven track record in the online media industry.
						</p>
						<p>
							Currently working as Web Developer in
							<a
								href="https://foodsustainesia.com"
								class="underline font-semibold transition hover:text-orange-400">Food Sustainesia</a
							>
							and Creative Lead in
							<a
								href="https://hmif.umn.ac.id"
								class="underline font-semibold transition hover:text-orange-400">HMIF UMN</a
							>.
						</p>
					</Typewriter>
				</div>
				<div
					class="mt-16 flex text-2xl items-center justify-center md:justify-start gap-6 flex-wrap"
				>
					<a
						href="/RivoCV.pdf"
						class="flex items-center justify-center gap-3 w-full md:w-inherit md:justify-start bg-white rounded text-black hover:bg-orange-500 hover:text-white transition text-sm px-3 py-2"
					>
						<span class="i-material-symbols-file-open text-xl" /> Resume</a
					>
					<a
						href="mailto:rivo@itshiroto.my.id"
						target="_blank"
						class="hover:text-orange-400 transition"
					>
						<button class="i-mdi-email-edit block m-auto" />
					</a>
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
		<div
		in:fade={{duration: 2500, easing: cubicInOut}}
			class="absolute -top-32 right-12 w-32 h-768px bg-gradient-to-r from-orange-300/50 to-red-600/50 rotate-45 blur-150"
		/>
		<div
		in:fade={{duration: 2500, easing: cubicInOut}}
			class="hidden md:block absolute bottom-1 left-12 w-28 h-128 bg-gradient-to-r from-orange-300/50 to-red-600/50 rotate-18 blur-130"
		/>
	{/if}
</main>

<style>
</style>
