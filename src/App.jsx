import React, { useState, useEffect } from 'react'
import { AiOutlineRight } from 'react-icons/ai'



const url = 'https://course-api.com/react-tabs-project'

const App = () => {

const [loading, setLoading] = useState(true)
const [jobs, setJobs] = useState([])
const [value, setValue] = useState(0)


const fetchJob = async ()=> {
	const response = await fetch(url)
	const newJobs = await response.json()
	setJobs( newJobs )
	setLoading( false )
}

useEffect(() => {
	fetchJob()
}, [])


if ( loading ) {
	return <section className="section loading">
		loading...
	</section>
}

const { company, dates, duties, title } = jobs[value]


	return (
		<section className="section"> 
				<div className="title">
				<h2> expierence </h2> 
					<div className="underline">  </div>
				</div>
				<div className="jobs-center">
				<div className="btn-container">
					{
						jobs.map( (item, index)  => (
							<button 
							onClick={ ()=> setValue( index ) }
							className={ `job-btn ${index === value && 'active-btn'}`}
							key={ index }> 
								{ item.company }
							</button>
						))
					}
				</div>

					<article className="job-info"> 
							<h3> { title } </h3>
							<h4> { company } </h4>
							<p className="job-date"> { dates } </p>  
							{ duties.map((duty, index) => (
									<div 
									key={ index }
									className="job-desc">
										<AiOutlineRight className="job-icon"/>
										<p> { duty } </p>
									</div>
							))}
					</article>
				</div>
		</section>
	)
}

export default App
