import { useNavigate } from 'react-router-dom'


function HomePage () {

const navigate = useNavigate()

    return(
        <>
        <div className='homepage-center-container'>
            <img className="homepage-logo" src="Public/images/List-It-logos_transparent.png" alt="homepage-logo"/>
            <button className='home-page-btn click-btn btn-style701' onClick={() => navigate('/list')}>My List</button>

        </div>
        </>
    )
}

export default HomePage