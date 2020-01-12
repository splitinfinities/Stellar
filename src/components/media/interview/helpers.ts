const prefixedTransformProp = () => {
    const el = document.createElement('div')
    const vendors = ['Webkit', 'webkit', 'Moz', 'moz', 'ms', 'o']

    if (el.style.transform != null) {
        return 'transform'
    }

    for (let v in vendors) {
        const prop = `${vendors[v]}Transform`

        if (typeof el.style[prop] !== 'undefined') {
            return prop
        }
    }
}

const difference = (a, b) => Math.abs(a - b)
const limit = (min, max, value) => Math.max(Math.min(value, max), min)
const interval = (start, end, current) => difference(start, current) / difference(start, end)
const interpolate = (start, end, progress) => { const p = difference(start, end) * progress; return start > end ? start - p : start + p }

export const get_interview_lines = (element) => {
    const els: Array<HTMLElement> = Array.from(element.querySelectorAll('.line'))

    const interviewLines = els.map(el => {
        const offset = 0
        const end = parseInt(el.dataset.end, 10)
        const start = parseInt(el.dataset.start, 10)
        const opacityStart = parseFloat(el.dataset.opacityStart)
        const opacityEnd = parseFloat(el.dataset.opacityEnd)
        const translateXStart = parseInt(el.dataset.translatexStart, 10)
        const translateXEnd = parseInt(el.dataset.translatexEnd, 10)
        const translateYStart = parseInt(el.dataset.translateyStart, 10)
        const translateYEnd = parseInt(el.dataset.translateyEnd, 10)
        const scaleStart = parseFloat(el.dataset.scaleStart)
        const scaleEnd = parseFloat(el.dataset.scaleEnd)
        const updates = {}

        if (!isNaN(opacityStart) && !isNaN(opacityEnd)) {
            updates["opacity"] = {
                end: opacityEnd,
                start: opacityStart
            }
        }

        if (!isNaN(translateXStart) && !isNaN(translateXEnd)) {
            updates["translateX"] = {
                end: translateXEnd,
                start: translateXStart
            }
        }

        if (!isNaN(translateYStart) && !isNaN(translateYEnd)) {
            updates["translateY"] = {
                end: translateYEnd,
                start: translateYStart
            }
        }

        if (!isNaN(scaleStart) && !isNaN(scaleEnd)) {
            updates["scale"] = {
                end: scaleEnd,
                start: scaleStart
            }
        }

        if (typeof end === 'undefined' || typeof start === 'undefined' || Object.keys(updates).length === 0) {
            return null
        }

        return { el, end, offset, start, updates }
    }).filter(x => x)

    return interviewLines;
};


export const update_interview_lines = (lines, cache, time) => {
    const transformProp = prefixedTransformProp()
    const y = time

    lines.map(({ el, end, offset, start, updates }) => {
        const s = offset + start
        const e = offset + end
        const state = cache.get(el)

        if ((y >= s && y <= e) || (state !== 'before' && y < s) || (state !== 'after' && y > e)) {
            let translateX = 0
            let translateY = 0
            let scale = 1

            const current = limit(s, e, y)
            const i = interval(s, e, current)

            if (updates.opacity) {
                const { end, start } = updates.opacity
                const opacity = interpolate(start, end, i).toFixed(2)
                el.style.opacity = opacity
            }

            if (updates.translateX) {
                const { end, start } = updates.translateX
                translateX = parseInt(interpolate(start, end, i), 10)
            }

            if (updates.translateY) {
                const { end, start } = updates.translateY
                translateY = parseInt(interpolate(start, end, i), 10)
            }

            if (updates.scale) {
                const { end, start } = updates.scale
                scale = interpolate(start, end, i).toFixed(2)
            }

            el.style[transformProp] =
                `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`

            if (y < s) {
                cache.set(el, 'before')
            } else if (y > e) {
                cache.set(el, 'after')
            } else {
                cache.set(el, 'during')
            }
        }
    })
}
