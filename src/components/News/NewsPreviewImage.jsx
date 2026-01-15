export default function NewsPreviewImage(props) {

    const { featured_image, thumbnail_size } = props;

    // Read notes
    // All images should soon be only S3 File System, no outside image hosting to prevent missing images
    // If it is a S3 File with thumbnails we show the lowest unless directed otherwise
    // If thumbnail_size is provided then will use that size
    // If it is a S3 File with no thumbnails just show the source

    // TODO
    // Detect if a thumbnail size is not available and spin one up on demand and show source as a fallback

    return (
        <>

            {/* 2023 */}
            {/* {featured_image?.image_type == "S3 File System" &&
                <img
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    src={process.env.NEXT_PUBLIC_CDN + featured_image?.key}
                    alt=""
                    loading='lazy'
                />
            } */}

            {(featured_image?.image_type == "S3 File System" || featured_image?.thumbnails?.length > 0) &&
                <>
                    {featured_image?.thumbnails?.length > 0 ?
                        <>
                            {(thumbnail_size && featured_image?.thumbnails?.find(thumb_obj => thumb_obj.width == thumbnail_size)) ?
                                <img
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                    src={
                                        process.env.NEXT_PUBLIC_CDN
                                        +
                                        (
                                            featured_image?.thumbnails?.find(thumb_obj => thumb_obj.width == thumbnail_size).key
                                        )
                                    }
                                    loading='lazy'
                                    alt=""
                                    className='flex-shrink-0'
                                />
                                :
                                <img
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                    src={
                                        process.env.NEXT_PUBLIC_CDN
                                        +
                                        (
                                            [...featured_image?.thumbnails].sort((a, b) => a.width - b.width)[0].key
                                        )
                                    }
                                    loading='lazy'
                                    alt=""
                                    className='flex-shrink-0'
                                />
                            }
                        </>
                        :
                        <img
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                            src={process.env.NEXT_PUBLIC_CDN + featured_image?.key}
                            loading='lazy'
                            alt=""
                            className='flex-shrink-0'
                        />
                    }
                </>
            }

            {/* Pre 2023 */}
            {(featured_image?.location && !featured_image?.image_type && (featured_image?.thumbnails?.length || 0) < 1) &&
                <img
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    // className="background"
                    src={`${process.env.NEXT_PUBLIC_CDN}${featured_image?.key}`}
                    alt=""
                    loading='lazy'
                />
            }

            {/* {!obj?.featured_image?.image_type && <img
                style={{
                    width: '100px',
                    height: '100px',
                    objectFit: 'cover',
                }}
                src={obj.featured_image?.location}
                alt=""
                className='flex-shrink-0'
            />} */}

        </>
    )

}