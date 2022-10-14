export const debugValue = (value: any) => {
    if (process.env.NEXT_PUBLIC_DEBUG) console.log({ value })
}
