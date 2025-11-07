import { MetadataRoute } from 'next'
import { getAllDepartments } from '../lib/departmentsData'
import { getAllProgramIds } from '../lib/programsData'
import { leaders, deans } from '../lib/leadershipData'
import { getAllNews } from './lib/newsDataOnly'
import { getAllEvents } from './lib/eventsData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://uowedupk.site'
  
  // Get all departments
  const departments = getAllDepartments()
  
  // Get all programs
  const programIds = getAllProgramIds()
  
  // Get all news articles and events
  const newsArticles = getAllNews()
  const events = getAllEvents()
  
  // Static routes with high priority
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about/mission-vision`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about/quality-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about/leadership`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about/campus`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about/facilities`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/admissions`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/admissions/requirements`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/admissions/application`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/academics`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/departments`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/research`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Department routes
  const departmentRoutes = departments.map((dept) => ({
    url: `${baseUrl}/departments/${dept.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Program routes
  const programRoutes = programIds.map((programId: string) => {
    // Extract department ID from program ID
    let deptId = 'computer-science' // default
    if (programId.includes('cyber-security') || programId.includes('computer-science') || programId.includes('artificial-intelligence')) {
      deptId = 'computer-science'
    } else if (programId.includes('mathematics')) {
      deptId = 'mathematics'
    } else if (programId.includes('chemistry')) {
      deptId = 'chemistry'
    }
    
    return {
      url: `${baseUrl}/departments/${deptId}/${programId}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }
  })

  // Leadership routes (leaders + deans)
  const leadershipRoutes = [
    ...leaders.map((leader) => ({
      url: `${baseUrl}/about/leadership/${leader.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...deans.map((dean) => ({
      url: `${baseUrl}/about/leadership/${dean.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]

  // News routes
  const newsRoutes = newsArticles.map((article) => ({
    url: `${baseUrl}/news/${article.id}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Event routes
  const eventRoutes = events.map((event) => ({
    url: `${baseUrl}/events/${event.id}`,
    lastModified: new Date(event.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    ...staticRoutes,
    ...departmentRoutes,
    ...programRoutes,
    ...leadershipRoutes,
    ...newsRoutes,
    ...eventRoutes,
  ]
}
