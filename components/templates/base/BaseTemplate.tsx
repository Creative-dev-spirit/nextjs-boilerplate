import styles from './BaseTemplate.module.css'

export interface IBaseTemplate {
    exampleStringProp: string
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ exampleStringProp }) => {
    return <div className={styles.container}>{exampleStringProp}</div>
}

export default BaseTemplate
