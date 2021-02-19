import React from 'react'

const SkillsBlock = ({block}) => {

    return(
        <div key={block.id} className="skills-block">
            <div className="skills-block__header title">
                {block.name}
            </div>
            <ul className="skills-block__skills">
                { block.list.map((e, i) => <li key={i}>{e}</li>) }
            </ul>
        </div>
    )
}

export default SkillsBlock