
const Card = (props) => {
    return(
        <div className="flex items-center gap-6">
            <img src={props.imageUrl} alt="travelcard" className="w-40 h-56 rounded-md" />
            <div >
                <div className="text-xs"><span className="font-bold uppercase tracking-widest font-normal">{props.location}</span> <a href={props.googleMapsUrl}><span className="underline text-slate-400">View On Google Maps</span></a></div>
                <h2 className="font-bold text-2xl">{props.title}</h2>
                <p className="leading-10 text-xs font-bold">{props.startDate} - {props.endDate}</p>
                <p className="text-xs">{props.description}</p>
            </div>
        </div>
    )
}

export default Card