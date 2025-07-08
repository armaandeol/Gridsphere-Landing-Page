import { Header } from '../sections/Header'
import { Footer } from '../sections/Footer'

export const Features = () => {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-6xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
                            Features
                        </h1>
                        
                        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                            Discover the powerful features that make Gridsphere the leading choice for modern agricultural solutions.
                        </p>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                    <span className="text-2xl">🛰️</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Satellite Monitoring</h3>
                                <p className="text-gray-600">Real-time crop monitoring using advanced satellite imagery and AI analysis.</p>
                            </div>
                            
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                    <span className="text-2xl">📊</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Analytics</h3>
                                <p className="text-gray-600">Comprehensive analytics dashboard for informed decision making.</p>
                            </div>
                            
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                                    <span className="text-2xl">🌦️</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Weather Integration</h3>
                                <p className="text-gray-600">Accurate weather forecasting integrated with farming operations.</p>
                            </div>
                            
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                    <span className="text-2xl">🤖</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Recommendations</h3>
                                <p className="text-gray-600">Smart recommendations for optimal planting, watering, and harvesting.</p>
                            </div>
                            
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                                    <span className="text-2xl">📱</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile App</h3>
                                <p className="text-gray-600">Access all features on-the-go with our intuitive mobile application.</p>
                            </div>
                            
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                    <span className="text-2xl">🔗</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">IoT Integration</h3>
                                <p className="text-gray-600">Seamless integration with IoT sensors and smart farming equipment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
