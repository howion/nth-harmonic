import digamma from 'math-digamma'

// Euler-Mascheroni constant
const GAMMA = 0.5772156649015329

/**
 * Computes nth harmonic number from digamma function.
 *
 * @param $n
 */
export default function nthHarmonic($n: number): number {
    return digamma($n + 1) + GAMMA
}
