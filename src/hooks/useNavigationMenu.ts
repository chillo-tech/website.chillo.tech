import { lang } from "@/lang"
import { fetchNavigationMenu } from "@/lang/fr/navigation"
import { Navigation } from "@/utils/types"
import { useEffect, useState } from "react"

const useNavigationMenu = () => {
    const [text, setText] = useState<Navigation>()

    const getContent = async () => {
        const content = await fetchNavigationMenu()
        setText(content ?? lang.navigation)
    }

    useEffect(() => {
        getContent()
    }, [])

    return text
}

export { useNavigationMenu }