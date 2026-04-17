import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='min-h-screen bg-app-bg text-text-secondary py-20 px-6'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 items-start'>
          <div className='space-y-6'>
            <div className='text-start'>
              <h2 className='text-5xl md:text-6xl font-bold text-primary-500 tracking-tight'>
                Let's build
              </h2>
              <h2 className='text-5xl md:text-6xl font-bold text-primary-500 tracking-tight'>
                something amazing together!
              </h2>
            </div>
            <p className='text-text-muted text-lg leading-relaxed max-w-xl'>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Feel free to send a message and I will get back to you soon.
            </p>
          </div>

          <form className='bg-app-surface border border-app-border rounded-2xl p-8 shadow-lg transition-all duration-300 hover:border-primary-500/50 hover:bg-app-card'>
            <div className='grid grid-cols-1 gap-6'>
              <label className='space-y-2 text-start'>
                <span className='text-sm font-semibold text-text-primary'>Name</span>
                <input
                  type='text'
                  name='name'
                  placeholder='Your name'
                  className='w-full rounded-2xl border border-app-border bg-app-bg px-4 py-3 text-text-primary outline-none transition-all duration-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/10'
                />
              </label>

              <label className='space-y-2 text-start'>
                <span className='text-sm font-semibold text-text-primary'>Email</span>
                <input
                  type='email'
                  name='email'
                  placeholder='you@example.com'
                  className='w-full rounded-2xl border border-app-border bg-app-bg px-4 py-3 text-text-primary outline-none transition-all duration-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/10'
                />
              </label>

              <label className='space-y-2 text-start'>
                <span className='text-sm font-semibold text-text-primary'>Message</span>
                <textarea
                  name='message'
                  rows={6}
                  placeholder='Write your message here...'
                  className='w-full rounded-2xl border border-app-border bg-app-bg px-4 py-3 text-text-primary outline-none transition-all duration-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/10 resize-none'
                />
              </label>

              <button
                type='submit'
                className='inline-flex items-center justify-center rounded-2xl bg-primary-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary-400'
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
