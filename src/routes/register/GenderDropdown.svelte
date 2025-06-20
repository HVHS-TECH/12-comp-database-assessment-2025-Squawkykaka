<script lang="ts">
	import * as Select from '$lib/components/ui/select/index.js';

	let { value = $bindable('') } = $props();
	const genders = [
		{ value: 'male', label: 'Male' },
		{ value: 'female', label: 'Female' },
		{ value: 'other', label: 'Other' },
		{ value: 'prefer-not', label: 'Id prefer not to say' }
	];

	const triggerContent = $derived(
		genders.find((f) => f.value === value)?.label ?? 'Select a gender'
	);
</script>

<Select.Root type="single" name="gender" bind:value>
	<Select.Trigger class="w-full">
		{triggerContent}
	</Select.Trigger>
	<Select.Content>
		<Select.Group>
			<Select.Label>Gender</Select.Label>
			{#each genders as gender (gender.value)}
				<Select.Item value={gender.value} label={gender.label}>
					{gender.label}
				</Select.Item>
			{/each}
		</Select.Group>
	</Select.Content>
</Select.Root>
