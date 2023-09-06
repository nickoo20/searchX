const SearchedItemTemplate = ({ data }) => {
    function createMarkup(html) {
        return { __html: html };
    }
    return (
        <div className="flex flex-col py-3 max-w-[700px]">
            <div className="group cursor-pointer" onClick={() => window.open(data.link)}>
                <div className="text-sm truncate text-[#202124]">
                    {data.formattedUrl}
                </div>
                <div className="group-hover:underline text-xl text-[#1a0dab]">{data.title}</div>
            </div>
            <div className="flex">
            <div className="text-sm text-[#4d5156] leading-6 pt-1" dangerouslySetInnerHTML={createMarkup(data.htmlSnippet)} />
            {data.pagemap?.cse_image?.length > 0 && data.pagemap?.cse_image[0]?.src && (
                <img src={data.pagemap?.cse_image[0]?.src} alt="" className='h-[10%] w-[10%] object-contain rounded-xl hidden md:block overflow-hidden'/>
            )}
            </div>
        </div>
    )
};

export default SearchedItemTemplate;
