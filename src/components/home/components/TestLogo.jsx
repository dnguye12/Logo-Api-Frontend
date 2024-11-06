import { getLogoTicker } from "../../../services/logo"

import { useEffect, useState } from "react"

const TestLogo = () => {
    const [logo, setLogo] = useState('')

    useEffect(() => {
        const fetchLogo = async () => {
            try {
                const logo = await getLogoTicker('GOOG')

                if (logo) {
                    setLogo(`${logo}`)
                }
            } catch (error) {
                setLogo(null)
            }
        }

        fetchLogo()
    }, [])

    if (logo) {
        return (
            <img className="" src="http://localhost:3001/api?url=sweetgreen.com" loading="lazy" style={{ clipPath: "circle(50%)" }} />
        )
    } else {
        return (
            <></>
        )
    }
}

export default TestLogo