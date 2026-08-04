export const DEFAULT_LOCKED_CHARACTERS: ReadonlySet<string> = new Set([' ', '+', '(', ')', '-', '–', '—']);

export const shuffle = <T,>(values: readonly T[]) => {
	const result = [...values];
	for (let index = result.length - 1; index > 0; index -= 1) {
		const target = Math.floor(Math.random() * (index + 1));
		[result[index], result[target]] = [result[target], result[index]];
	}
	return result;
};

export const randomCharacter = (pool: readonly string[]) =>
	pool[Math.floor(Math.random() * pool.length)] ?? '';

export const characterPool = (...values: string[]) => [...new Set(
	values.flatMap((value) => [...value]).filter((character) => character !== ' ' && character !== '\u00a0'),
)];

export const renderCharacterSpans = (spans: readonly HTMLElement[], characters: readonly string[]) => {
	spans.forEach((span, index) => {
		const character = characters[index] ?? '';
		span.textContent = character === ' ' || character === '\u00a0' ? '\u00a0' : character;
	});
};

interface PermutationOptions {
	spans: readonly HTMLElement[];
	value: readonly string[];
	lockedCharacters?: ReadonlySet<string>;
	duration?: number;
	tickInterval?: (progress: number) => number;
}

export const animatePermutation = ({
	spans,
	value,
	lockedCharacters = DEFAULT_LOCKED_CHARACTERS,
	duration = 260,
	tickInterval = (progress) => 38 + 38 * (1 - Math.pow(1 - progress, 3)),
}: PermutationOptions) => new Promise<void>((resolve) => {
	const original = [...value];
	const mutableIndexes = original.flatMap((character, index) =>
		lockedCharacters.has(character) ? [] : [index],
	);
	const mutableCharacters = mutableIndexes.map((index) => original[index]);
	const startedAt = performance.now();
	let nextTick = startedAt;
	const frame = (now: number) => {
		const progress = Math.min(1, (now - startedAt) / duration);
		if (now >= nextTick || progress === 1) {
			nextTick = now + tickInterval(progress);
			const output = [...original];
			const shuffled = shuffle(mutableCharacters);
			mutableIndexes.forEach((characterIndex, index) => {
				output[characterIndex] = shuffled[index] ?? original[characterIndex];
			});
			renderCharacterSpans(spans, output);
		}
		if (progress < 1) requestAnimationFrame(frame);
		else {
			renderCharacterSpans(spans, original);
			resolve();
		}
	};
	requestAnimationFrame(frame);
});
