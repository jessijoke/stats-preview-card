import '../styles/statsPreviewCardStyles.css'

export const StatsPreviewCard = (props) => {
    return(
        <div className="statsCardContainer">
            <div className="mainStatCard">
                <div className="stats">
                    <div className="statsContainer">
                        <div className="statsHeader interFont headTitle">
                        Get insights that help your business grow.
                        </div>
                        <div className="statsDescription detailInfo">
                        Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.
                        </div>
                        <div className="statsInfo headerFont">
                            <div className="statsInfoContainer">
                                <div className="statHeader">
                                10k+
                                </div>
                                <div className="statDetails detailInfo">
                                companies
                                </div>
                            </div>
                            <div className="statsInfoContainer">
                                <div className="statHeader">
                                314
                                </div>
                                <div className="statDetails detailInfo">
                                templates
                                </div>
                            </div>
                            <div className="statsInfoContainer">
                                <div className="statHeader">
                                12M+
                                </div>
                                <div className="statDetails detailInfo">
                                queries
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="imageContainer">
                    <div className="backgroundImage">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}