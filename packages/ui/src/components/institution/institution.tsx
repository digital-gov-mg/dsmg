import { type JSX } from 'react'
import { global } from '../../config'
import { InstitutionStyled, CountryMottoStyled, CountryRegimeStyled } from './institution-styled'

export interface InstitutionProps {
    /**
     * Type of institution.
     * @default'ministry'
     * @type'ministry' | 'department' |'regional'
     */
    type: 'ministry' | 'department' | 'regional',

    /**
     * Acronym of the institution.
     * @type string
     * @default ''
     */
    acronym: string,

    /**
     * Name of the institution.
     * @type string
     * @default ''
     */
    name: string,

    /**
     * Motto of the Republic of Madagascar.
     * @type string
     * @default 'Fitiavana - Tanindrazana - Fandrosoana'
     */
    motto: string,
}

export function Institution({type = 'ministry', acronym, name, motto = 'Fitiavana - Tanindrazana - Fandrosoana'}: InstitutionProps): JSX.Element {
    global()

    return <InstitutionStyled>
        {type === 'ministry' && `Ministère`}
        {type === 'department' && `${acronym} - Direction Générale`}
        {type === 'regional' && `${acronym} - Direction Régionale`}
        <br />
        {name}
        <CountryRegimeStyled>
            République de Madagascar
        </CountryRegimeStyled>
        <CountryMottoStyled>
            {motto}
        </CountryMottoStyled>
    </InstitutionStyled>
}
