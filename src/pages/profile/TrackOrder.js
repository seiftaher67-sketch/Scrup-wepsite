import React from 'react';
import Header from '../../components/Header';

export default function TrackOrder() {
    return (
        <div className="w-full min-h-screen bg-gray-50">
            <Header />

            {/* Empty content area - just header as requested */}
            <div style={{ minHeight: '100vh', paddingTop: '130px' }}>
                {/* This page contains only Header as requested - Footer is in App.js */}
            </div>
        </div>
    );
}
