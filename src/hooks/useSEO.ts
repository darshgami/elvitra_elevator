import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  canonicalUrl?: string
  schema?: Record<string, any>
}

export function useSEO({ title, description, canonicalUrl, schema }: SEOProps) {
  useEffect(() => {
    // 1. Update Title
    document.title = title

    // 2. Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement
    if (metaDescription) {
      metaDescription.content = description
    } else {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      metaDescription.content = description
      document.head.appendChild(metaDescription)
    }

    // 3. Update Canonical URL
    const finalCanonicalUrl = canonicalUrl || window.location.href
    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (linkCanonical) {
      linkCanonical.href = finalCanonicalUrl
    } else {
      linkCanonical = document.createElement('link')
      linkCanonical.rel = 'canonical'
      linkCanonical.href = finalCanonicalUrl
      document.head.appendChild(linkCanonical)
    }

    // 4. Open Graph Tags
    const updateOGTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement
      if (tag) {
        tag.content = content
      } else {
        tag = document.createElement('meta')
        tag.setAttribute('property', property)
        tag.content = content
        document.head.appendChild(tag)
      }
    }

    updateOGTag('og:title', title)
    updateOGTag('og:description', description)
    updateOGTag('og:url', finalCanonicalUrl)
    updateOGTag('og:type', 'website')

    // 5. Update Schema (JSON-LD)
    if (schema) {
      let scriptSchema = document.querySelector('#seo-schema') as HTMLScriptElement
      if (scriptSchema) {
        scriptSchema.textContent = JSON.stringify(schema)
      } else {
        scriptSchema = document.createElement('script')
        scriptSchema.id = 'seo-schema'
        scriptSchema.type = 'application/ld+json'
        scriptSchema.textContent = JSON.stringify(schema)
        document.head.appendChild(scriptSchema)
      }
    } else {
      const scriptSchema = document.querySelector('#seo-schema')
      if (scriptSchema) {
        scriptSchema.remove()
      }
    }
  }, [title, description, canonicalUrl, schema])
}
