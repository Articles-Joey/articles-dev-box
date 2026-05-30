"use client"
import { lazy, memo, useState } from "react";
import React, { Suspense } from 'react';

function GlobalBody({
    fontawesome = true,
}) {

    return (
        <>

            {fontawesome && <link
                rel="stylesheet"
                href={`https://cdn.articles.media/fonts/fontawesome/css/all.min.css`}
            />}

        </>
    );

}

export default memo(GlobalBody);