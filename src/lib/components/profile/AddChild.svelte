<script>
	import { createEventDispatcher } from 'svelte';

	let dispatch = createEventDispatcher();

	const addChildHandle = (e) => {
		const formData = new FormData(e.target);

		const data = {};
		for (let field of formData) {
			const [key, value] = field;
			data[key] = value;
		}
		console.log('addChild', data);

		// localStorage.setItem('isChild', true);
		dispatch('addChild', {
			isChild: true
		});
	};
</script>

<form
	on:submit|preventDefault={addChildHandle}
	class="add-child-form"
>
	<div class="title">Добавьте своего ребенка</div>
	<label>
		Имя
		<input
			type="text"
			class="input"
			id="firstName"
			name="firstName"
			value=""
			required
		/>
	</label>
	<label>
		Фамилия
		<input
			type="text"
			class="input"
			id="lastName"
			name="lastName"
			value=""
			required
		/>
	</label>
	<label>
		Дата рождения
		<input
			type="date"
			class="input"
			id="birthDate"
			name="birthDate"
			value=""
			required
		/>
	</label>
	<label>
		Логин
		<input
			type="text"
			class="input"
			id="login"
			name="login"
			value=""
			required
		/>
	</label>
	<label>
		Пароль
		<input
			type="password"
			class="input"
			id="password"
			name="password"
			value=""
			required
		/>
	</label>
	<button>Добавить</button>
</form>

<style>
	.add-child-form {
		width: 100%;
		flex-shrink: 0;
		border-radius: 16px;
		background: #efe5ff;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 50px 32px;
	}

	.add-child-form .title {
		color: #000;
		font-size: 18px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		margin-bottom: 34px;
	}

	label {
		display: flex;
		flex-direction: column;
	}

	input {
		border-radius: 10px;
		border: 1px solid var(--dark);
		background: #fff;
		width: 240px;
		height: 38px;
		flex-shrink: 0;
		padding: 10px;
		margin-bottom: 15px;
	}

	button {
		width: 240px;
		height: 43px;
		flex-shrink: 0;
		border-radius: 20px;
		background: var(--primary);
		color: #fff;
		font-size: 17px;
		font-weight: 500;
		margin-top: 15px;
	}
</style>
