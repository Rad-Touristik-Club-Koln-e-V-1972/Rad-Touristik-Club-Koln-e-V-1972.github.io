declare module 'vue-signature-pad' {
    import { default as _Vue } from 'vue'

    export interface VueSignaturePad extends _Vue {
        customStyle: CSSStyleDeclaration
        height: string
        images: []
        options: Record<string, any>
        saveType: string
        width: string
        addImages(images: []): void
        clearCacheImages(): void
        clearSignature(): void
        fromDataURL(data: string): void
        getPropImagesAndCacheImages(): void
        isEmpty(): boolean
        lockSignaturePad(): void
        mergeImagesAndSignature(signature: object | string): void
        openSignaturePad(): void
        saveSignature(type: string = 'image/png', encoderOptions: Number = -1): { isEmpty: boolean; data: undefined | string }
        toData(): string
        undoSignature(): void
    }

    export default function VueSignaturePad(Vue: typeof _Vue): void
}
