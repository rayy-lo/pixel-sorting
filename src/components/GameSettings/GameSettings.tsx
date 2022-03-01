import SettingsSVG from '../../assets/icons/settings.svg'
import styles from './GameSettings.module.css'

const GameSettings = () => {
    const { settingsBtn } = styles

    return (
        <button className={settingsBtn} type="button">
            <img src={SettingsSVG} alt="Settings" />
        </button>
    )
}

export default GameSettings
