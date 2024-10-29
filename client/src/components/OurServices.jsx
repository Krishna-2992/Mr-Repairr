import plumberImg from '../assets/plumber.png'
import electricianImg from '../assets/electrician.png'
import carpenterImg from '../assets/carpenter.png'
import pestControlImg from '../assets/pest_control.jpg'
import Card from './Card'
export default function OurServices() {
    return (
        <div id="our-services" className="bg-gray-50 text-gray-800 py-16">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Our Services</h2>
                <p className="text-xl text-gray-600">We offer a wide range of services to meet your needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
                <Card
                    image={electricianImg}
                    title="Electrician"
                    description="Professional electrical solutions for all your needs."
                />
                <Card
                    image={plumberImg}
                    title="Plumber"
                    description="Expert plumbing services for your home or office."
                />
                <Card
                    image={carpenterImg}
                    title="Carpenter"
                    description="Skilled carpentry for furniture and home improvement."
                />
                <Card
                    image={pestControlImg}
                    title="Pest Control"
                    description="Effective pest control services for a safer environment."
                />
            </div>
        </div>
    )
}
