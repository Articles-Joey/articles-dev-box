// import ArticlesButton from "@/components/Articles/Button"
// import routes from "@/components/constants/routes"
// import Link from "next/link"

// import achievements, { achievement_tags } from 'components/constants/achievements'

// TODO
const achievements = []

export default function Achievements({
    activeLayoutProposalSentiments
}) {
    return (
        <div>

            <div className='achievements card card-articles'>
                <div className="card-body p-0">
                    {achievements
                        // .filter(ach_obj => {
                        //     if (achievementFilter) {
                        //         return ach_obj?.tags?.includes(achievementFilter)
                        //     } else {
                        //         return ach_obj
                        //     }
                        // })
                        // .filter(ach_obj => {
                        //     if (achievementSearch) {
                        //         return ach_obj?.name?.toLowerCase().includes(achievementSearch?.toLowerCase())
                        //     } else {
                        //         return ach_obj
                        //     }
                        // })
                        .map(achievement =>
                            <div key={achievement.name}>

                                <div className='achievement w-100 d-flex align-items-center'>

                                    <div className='icon' style={{ width: '50px' }}>
                                        <i className={`fad ${achievement.icon} fa-lg`}></i>
                                    </div>

                                    <div className='details small me-auto'>
                                        <b className='name'>{achievement.name}</b>
                                        <div className='description mb-1'>{achievement.description}</div>
                                        <div className="small">
                                            {achievement.tags?.map(item => <span key={item} className="badge bg-dark border">{item}</span>)}
                                        </div>
                                    </div>

                                    <div className='icon border-end-0 border-start border-dark'>

                                        <div className="text-center px-3">
                                            <i className={`fad fa-square fa-lg me-0`}></i>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        )}
                </div>
            </div>

        </div>
    )
}