import { type JSX } from 'react'
import { global } from '../../config'
import { InstitutionStyled, CountryMottoStyled, CountryRegimeStyled } from './institution-styled'

export interface InstitutionProps {
    /**
     * Type of institution.
     */
    type: 'ministry' | 'department' | 'regional',

    /**
     * Acronym of the institution.
     */
    acronym: string,

    /**
     * Name of the institution.
     */
    name: string,

    /**
     * Motto of the Republic of Madagascar.
     */
    motto: string,
}

/**
 * Institution component.
 */
export function Institution({type = 'ministry', acronym, name, motto = 'Fitiavana - Tanindrazana - Fandrosoana'}: InstitutionProps): JSX.Element {
    global()

    return <InstitutionStyled>

        {type === 'ministry' && `Ministère`}
        {type === 'department' && `Direction Générale`}
        {type === 'regional' && `Direction Régionale`}
        <br />
        {name}
        {(type === 'department' || type === 'regional') && ` - ${acronym}`}
        <CountryRegimeStyled>
            République de Madagascar
        </CountryRegimeStyled>
        <CountryMottoStyled>
            {motto}
        </CountryMottoStyled>
    </InstitutionStyled>
}
