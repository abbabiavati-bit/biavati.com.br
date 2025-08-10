"use client";
import { useEffect, useState } from 'react'
import type { HeroMedia as Media } from '@/lib/media'

export default function HeroMedia({ media, className = '' }: { media: Media; className?: string }) {
  const [showModal, setShowModal] = useState(false)
  const [loaded, setLoaded] = useState(false)

  // If an iframe fails to load due to X-Frame-Options, we may never get onLoad.
  // Show the CTA overlay anyway for iframe sources.
  useEffect(() => {
    if (media.kind !== 'iframe') return
    const t = setTimeout(() => {
      if (!loaded) {
        // keep overlay visible; user can open modal or new tab
      }
    }, 2000)
    return () => clearTimeout(t)
  }, [media.kind, loaded])

  const open = () => setShowModal(true)
  const close = () => setShowModal(false)

  const iframe = (src: string) => (
    <iframe
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
      src={src}
      title="Vídeo de destaque"
      allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
      allowFullScreen
      onLoad={() => setLoaded(true)}
    />
  )

  const watchUrl = (() => {
    switch (media.kind) {
      case 'youtube':
        return `https://www.youtube.com/watch?v=${media.id}`
      case 'vimeo':
        return `https://vimeo.com/${media.id}`
      case 'mp4':
        return media.url
      case 'iframe':
        return media.url
    }
  })()

  return (
    <div className="absolute inset-0">
      {media.kind === 'mp4' && (
        <video
          className={`absolute inset-0 h-full w-full object-cover ${className}`}
          src={media.url}
          poster={media.poster}
          autoPlay
          muted
          loop
          playsInline
          aria-label="Vídeo do litoral do Paraná"
          onLoadedData={() => setLoaded(true)}
        />
      )}
      {media.kind === 'youtube' && (
        iframe(`https://www.youtube.com/embed/${media.id}?autoplay=1&mute=1&loop=1&playlist=${media.id}&controls=0&rel=0&modestbranding=1&playsinline=1`)
      )}
      {media.kind === 'vimeo' && (
        iframe(`https://player.vimeo.com/video/${media.id}?background=1&autoplay=1&muted=1&loop=1&byline=0&title=0&portrait=0&controls=0&playsinline=1`)
      )}
      {media.kind === 'iframe' && iframe(media.url)}

      {media.kind === 'iframe' && (
        <div className="pointer-events-none absolute bottom-6 left-6">
          <button
            onClick={open}
            className="pointer-events-auto inline-flex items-center rounded-md bg-white/90 px-4 py-2 text-slate-900 text-sm font-medium shadow hover:bg-white"
          >
            Assistir vídeo
          </button>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" role="dialog" aria-modal="true">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-xl bg-black">
            <button
              onClick={close}
              className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow hover:bg-white"
              aria-label="Fechar"
            >
              <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true"><path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
            <div className="aspect-video w-full">
              {media.kind === 'mp4' && (
                <video className="h-full w-full" src={media.url} controls autoPlay muted />
              )}
              {media.kind === 'youtube' && (
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${media.id}?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1`}
                  title="Vídeo de destaque"
                  allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                  allowFullScreen
                />
              )}
              {media.kind === 'vimeo' && (
                <iframe
                  className="h-full w-full"
                  src={`https://player.vimeo.com/video/${media.id}?autoplay=1&muted=0&loop=0&byline=0&title=0&portrait=0`}
                  title="Vídeo de destaque"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              )}
              {media.kind === 'iframe' && (
                <div className="flex h-full w-full items-center justify-center bg-black">
                  <iframe
                    className="h-full w-full"
                    src={media.url}
                    title="Vídeo de destaque"
                    allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
            <div className="flex items-center justify-between bg-black px-4 py-3 text-sm text-white/80">
              <span>Se houver bloqueio de incorporação, assista no site original.</span>
              <a href={watchUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-accent-400 hover:text-accent-300">Abrir em nova aba →</a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

