const SITE = "http://localhost:3000"

export const getApi = async <T>(
    url: string,
    options: RequestInit = {}
): Promise<T | undefined> => {
    try {
        const response = await fetch(`${SITE}${url}`, options)

        if (!response.ok) {
            throw new Error("Failed to fetch data")
        }

        return await response.json()
    } catch (error) {
        console.log(error)
        return undefined
    }
}

export const postApi = async <T>(
    url: string,
    body: object,
    method: string = "POST"
): Promise<T> => {
    const response = await fetch(`${SITE}${url}`, {
        method,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })

    if (!response.ok) {
        throw new Error("Request failed")
    }

    return await response.json()
}

export const putApi = async <T>(url: string, body: object): Promise<T> => {
    return await postApi<T>(url, body, "PUT")
}

export const deleteApi = async (
    url: string,
    id: string
): Promise<void> => {
    await postApi(url, { id }, "DELETE")
}