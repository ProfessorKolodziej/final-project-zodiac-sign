const body = document.querySelector('#starshine');
		const template = document.querySelector('.template.shine');
		const stars = 20;
		const sparkle = 20;
		let size = 'small';
		const createStar = function () {
			const star = template.cloneNode(true);
			star.style.top = `${Math.random() * 100}%`;
			star.style.left = `${Math.random() * 100}%`;
			star.animationDelay = `${Math.random() * sparkle}s`;
			star.classList.add(size);
			body.insertAdjacentElement('beforeend', star);
		};

		// Creates as many stars as your variable above says to, randomly.
		for (var i = 0; i < stars; i++) {
			if (i % 2 === 0) {
				size = 'small';
			} else if (i % 3 === 0) {
				size = 'medium';
			} else {
				size = 'large';
			}

			createStar();
		}
