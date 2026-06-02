// importar todos os componentes 
//importar o componente do botão 
import ButtonLink from "./ButtonLink";

//importar componente da habilidades 
import SkillBadge from "./SkillBadge";

function ProfileCard(profile) {
    return (
        <article className="profile-card">
            <div className="rofile-header">
                <div className="avatar">
                    {profile.initials}
                </div>
                <h1>{profile.name}</h1>
                <h2>{profile.role}</h2>
                <p className="location">{profile.location}</p>

            </div>
            <p className="bio">{profile.bio}</p>
            <div className="info=grid">

                <div className="info=item">
                    <strong>{profile.experience}</strong>
                    <span>Experiência</span>
                </div>

                <div className="info-item">
                    <strong>{profile.projetos}</strong>
                    <span>Projetos</span>
                </div>

                <div className="info-item">
                    <strong>{profile.students}</strong>
                    <span>Alunos</span>
                </div>

            </div>

            <section className="skill-section">
                <h3>Principais habilidades</h3>
                <div className="skills-list">
                    
                    {profile.skills?.map((skill) => (<SkillBadge key={skill} skill={skill} />))}
                </div>
            </section>
{/*area dos botões */}
<div className="button-group">
    <ButtonLink text="linkedin" href={profile.links?.linkedin} variant="primary"/>
    <ButtonLink text="Github" href={profile.links?.github} variant="secundary"/>
    <ButtonLink text="Portifolio" href={profile.links?.Portifolio} variant="outline"/>
</div>
        </article>
    )
}

export default ProfileCard