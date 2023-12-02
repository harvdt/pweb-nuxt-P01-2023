<template>
	<section
		class="py-20 flex items-center justify-center"
		style="
			background-image: url('https://wallpapers.com/images/hd/newspaper-background-5v1or99bwtyav5u4.jpg');
			background-size: cover;
		"
	>
		<div class="container mx-auto px-4">
			<div
				class="max-w-3xl mx-auto text-center bg-white bg-opacity-90 p-8 rounded-lg shadow-lg"
			>
				<h1 class="text-4xl md:text-6xl font-bold leading-tight">
					Welcome to
					<span class="text-blue-900"
						>IT<span class="text-red-500">Blogs</span></span
					>
				</h1>
				<p class="mt-4 text-gray-500 text-lg">
					"We provide the latest and most reliable informations for you to read every
					day"
				</p>
				<div class="mt-8">
					<NuxtLink
						to="/about"
						class="bg-blue-500 text-white font-semibold rounded-full px-8 py-3 hover:bg-blue-600 transition duration-300"
					>
						Learn More About Us
					</NuxtLink>
				</div>
			</div>
		</div>
	</section>

	<section class="bg-gray-200 py-20">
		<div class="container mx-auto px-4">
			<div class="max-w-3xl mx-auto">
				<h2 class="text-3xl font-bold mb-8 text-center">Kelebihan Kami</h2>

				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<div
						class="bg-white rounded-lg p-6 shadow-md flex flex-col items-center"
					>
						<svg
							class="h-16 w-16 text-black mb-4"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<circle cx="12" cy="12" r="9" />
							<line x1="9" y1="12" x2="15" y2="12" />
							<line x1="12" y1="9" x2="12" y2="15" />
						</svg>
						<h3 class="text-xl font-semibold mb-2 text-center">
							Informasi terpercaya
						</h3>
						<p class="text-gray-700 text-center">
							Informasi yang kami berikan dapat selalu anda percayai
						</p>
					</div>

					<div
						class="bg-white rounded-lg p-6 shadow-md flex flex-col items-center"
					>
						<svg
							class="h-16 w-16 text-black mb-4"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<polygon points="3 11 22 2 13 21 11 13 3 11" />
						</svg>
						<h3 class="text-xl font-semibold mb-2 text-center">
							Mudah diakses
						</h3>
						<p class="text-gray-700 text-center">
							Akses kapan pun dan di mana pun
						</p>
					</div>

					<div
						class="bg-white rounded-lg p-6 shadow-md flex flex-col items-center"
					>
						<svg
							class="h-16 w-16 text-black mb-4"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<circle cx="12" cy="12" r="9" />
							<circle cx="12" cy="12" r="1" />
							<line x1="13.41" y1="10.59" x2="16" y2="8" />
							<path d="M7 12a5 5 0 0 1 5 -5" />
						</svg>
						<h3 class="text-xl font-semibold mb-2 text-center">
							Blogs ter-update
						</h3>
						<p class="text-gray-700 text-center">
							Blog paling update bagi Anda
						</p>
					</div>
				</div>

				<div class="mt-12 flex justify-center">
					<NuxtLink
						to="/blogs"
						class="bg-blue-500 text-white font-semibold rounded-full px-8 py-3 hover:bg-blue-600 transition duration-300"
					>
						View All Blogs
					</NuxtLink>
				</div>
			</div>
		</div>
	</section>

	<section class="py-20 bg-white">
		<div class="container mx-auto px-4">
			<div class="max-w-3xl mx-auto text-center">
				<h2 class="text-3xl font-bold mb-8 text-blue-900">Support Us</h2>
				<p class="text-lg text-gray-700 mb-8">
					Jika anda ingin mendukung kami, tolong berikan nilai A untuk praktikum
					Pemrograman Web kami
				</p>
			</div>
		</div>
	</section>
</template>
