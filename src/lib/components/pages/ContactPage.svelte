<div class="container">
	<div>
		<div class="avatar-container">
			<img height="128px" src="/profile_picture.jpg" alt="My avatar" />
		</div>

		<h1>Tomás Rinaldi</h1>

		<p>Videogame and Web developer from 🇦🇷 Argentina.</p>

		<ul>
			<li>Email: <a href="mailto:tomirinaldi8@gmail.com">tomirinaldi8@gmail.com</a></li>
			<li>
				<a href="https://www.linkedin.com/in/tom%C3%A1s-rinaldi-50244a1a1/">
					<img height="32px" src="/Logos/linkedin.png" alt="LinkedIn logo" />
				</a>
			</li>
			<li>
				<a href="https://github.com/tomi901">
					<img height="32px" src="/Logos/github-mark.svg" alt="GitHub logo" />
					GitHub
				</a>
			</li>
		</ul>
	</div>
</div>

<style>
	.container {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 64px;

		color: #222222;
		font-size: 1.25em;
	}

	.container > div {
		min-width: 512px;
	}

	:global(a) {
		color: gray;
		text-decoration: underline dotted;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.avatar-container {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.avatar-container img {
		border-radius: 100%;
		width: 128px;
		height: 128px;
		object-fit: cover;
	}
</style>
