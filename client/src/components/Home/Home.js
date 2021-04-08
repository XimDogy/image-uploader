import React from 'react'
import Footer from '../Footer/Footer';
import Progress from '../Progress/Progress';
import ShowImage from '../ShowImage/ShowImage';
import Card from '../Card/Card';
import './Home.css'

const Home = ({setIsUploading, setIsComplete, setData, isUploading, isComplete, data}) => {
    
    return (
        <div className="container">
            {
                isUploading ? (
                    isComplete ? <ShowImage data={data} /> : <Progress />
                ) : <Card setIsComplete={setIsComplete} setIsUploading={setIsUploading} setData={setData} />
            }
            
            <Footer />
        </div>
    )
}

export default Home
