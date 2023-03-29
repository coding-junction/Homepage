import { useState } from 'react';
import './Progress.css';

function Progress() {
    let progress = document.getElementById('progressbar');

    let totalHeight = document.body.scrollHeight - window.innerHeight;

    window.onscroll = function () {
        let progressHeight = (window.pageYOffset / totalHeight) * 100;
        progress.style.height = progressHeight + "%";
    }
    return (
        <div>
            <div className="progressbar"></div>
            <div className="scrollPath"></div>
        </div>
    );
}
export default Progress;