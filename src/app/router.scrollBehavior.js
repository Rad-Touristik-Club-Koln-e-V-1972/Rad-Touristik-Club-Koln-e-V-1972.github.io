// TODO WORKAROUND FOR https://github.com/nuxt/bridge/issues/457
export default function (_, __, savedPosition) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                x: savedPosition?.x || 0,
                y: savedPosition?.y || 0,
            })
        }, 0)
    })
}
