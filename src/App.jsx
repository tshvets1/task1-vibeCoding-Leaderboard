import { useEffect, useMemo, useState } from 'react'
import { leaderboardEntries } from './data/leaderboard.js'
import './App.css'

const CATEGORY_NAMES = ['Education', 'University Partnership', 'Public speaking']
const METRIC_CATEGORY_ORDER = ['University Partnership', 'Education', 'Public speaking']
const allCategories = ['All Categories', ...CATEGORY_NAMES]
const allYears = ['All Years', ...getAllYears(leaderboardEntries)]
const allQuarters = ['All Quarters', ...getAllQuarters(leaderboardEntries)]

function App() {
  const [search, setSearch] = useState('')
  const [year, setYear] = useState('All Years')
  const [quarter, setQuarter] = useState('All Quarters')
  const [category, setCategory] = useState('All Categories')
  const [openFilter, setOpenFilter] = useState(null)
  const [expandedId, setExpandedId] = useState(null)

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!event.target.closest('.filterDropdown')) {
        setOpenFilter(null)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpenFilter(null)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const searchTerm = search.trim().toLowerCase()

  const rankedEntries = useMemo(() => {
    return leaderboardEntries
      .map((entry, originalIndex) => {
        const matchedActivities = entry.activities.filter((activity) =>
          activityMatchesFilters(activity, { year, quarter, category }),
        )
        const total = matchedActivities.reduce((sum, activity) => sum + activity.points, 0)

        return {
          ...entry,
          originalIndex,
          matchedActivities,
          total,
          categoryTotals: buildCategoryTotals(matchedActivities),
          searchText: buildEntrySearchText(entry),
        }
      })
      .filter((entry) => entry.total > 0)
      .sort((left, right) => right.total - left.total || left.originalIndex - right.originalIndex)
      .map((entry, index) => ({
        ...entry,
        rank: index + 1,
      }))
  }, [category, quarter, year])

  const filteredEntries = useMemo(() => {
    return rankedEntries.filter((entry) => matchesSearch(entry.searchText, searchTerm))
  }, [rankedEntries, searchTerm])

  const podiumEntries = useMemo(() => {
    return rankedEntries.slice(0, 3)
  }, [rankedEntries])

  const visiblePodiumEntries = useMemo(() => {
    const podiumOrder = [2, 1, 3]

    return podiumOrder
      .map((rank) => podiumEntries.find((entry) => entry.rank === rank))
      .filter((entry) => entry && matchesSearch(entry.searchText, searchTerm))
  }, [podiumEntries, searchTerm])

  const activeExpandedId = filteredEntries.some((entry) => entry.id === expandedId) ? expandedId : null
  const searchHasValue = searchTerm.length > 0

  return (
    <main className="leaderboardApp">
      <section className="pageHeader">
        <div>
          <h1>Leaderboard</h1>
          <p>Top performers ranked by matching activity points</p>
        </div>
      </section>

      <section className="filtersBar" aria-label="Leaderboard filters">
        <FilterDropdown
          id="year"
          value={year}
          options={allYears}
          open={openFilter === 'year'}
          onToggle={() => setOpenFilter(openFilter === 'year' ? null : 'year')}
          onSelect={(value) => {
            setYear(value)
            setOpenFilter(null)
          }}
        />
        <FilterDropdown
          id="quarter"
          value={quarter}
          options={allQuarters}
          open={openFilter === 'quarter'}
          onToggle={() => setOpenFilter(openFilter === 'quarter' ? null : 'quarter')}
          onSelect={(value) => {
            setQuarter(value)
            setOpenFilter(null)
          }}
        />
        <FilterDropdown
          id="category"
          value={category}
          options={allCategories}
          open={openFilter === 'category'}
          onToggle={() => setOpenFilter(openFilter === 'category' ? null : 'category')}
          onSelect={(value) => {
            setCategory(value)
            setOpenFilter(null)
          }}
        />

        <div className="searchField">
          <SearchIcon />
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by name or surname..."
            aria-label="Search by name or surname"
          />
          {searchHasValue ? (
            <button type="button" className="searchField__clear" aria-label="Clear search" onClick={() => setSearch('')}>
              <CloseIcon />
            </button>
          ) : null}
        </div>
      </section>

      {visiblePodiumEntries.length ? (
        <section className="podium" aria-label="Top three performers">
          <div className={`podiumGrid podiumGrid--count-${visiblePodiumEntries.length}`}>
            {visiblePodiumEntries.map((entry) => (
              <div className="podiumSlot" key={entry.id}>
                <PodiumCard entry={entry} rank={entry.rank} variant={podiumVariant(entry.rank)} />
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="leaderboardList" aria-label="Ranked employees">
        {filteredEntries.length ? (
          filteredEntries.map((entry) => {
            const expanded = activeExpandedId === entry.id

            return (
              <article className={`leaderboardRow${expanded ? ' isExpanded' : ''}`} key={entry.id}>
                <div className="leaderboardRow__main">
                  <div className="leaderboardRow__identity">
                    <div className="leaderboardRow__rank">{entry.rank}</div>
                    <Avatar entry={entry} />
                    <div className="leaderboardRow__text">
                      <h2>{entry.name}</h2>
                      <p>
                        {entry.role} ({entry.code})
                      </p>
                    </div>
                  </div>

                  <div className="leaderboardRow__meta">
                    <div className="leaderboardRow__metrics">
                      {entry.categoryTotals.map((metric) => (
                        <div
                          className={`metric metric--${getCategoryClassName(metric.category)}`}
                          key={`${entry.id}-${metric.category}`}
                          data-tooltip={metric.category}
                          tabIndex={0}
                          aria-label={`${metric.category}: ${metric.points} points`}
                        >
                          <CategoryIcon category={metric.category} />
                          <span>{metric.points}</span>
                        </div>
                      ))}
                    </div>

                    <div className="leaderboardRow__divider" />

                    <div className="leaderboardRow__total">
                      <span className="totalLabel">TOTAL</span>
                      <div className="totalValue">
                        <StarIcon />
                        <strong>{entry.total}</strong>
                      </div>
                    </div>

                    <button
                      type="button"
                      className={`expandButton${expanded ? ' isOpen' : ''}`}
                      aria-label={`${expanded ? 'Collapse' : 'Expand'} ${entry.name}`}
                      aria-expanded={expanded}
                      onClick={() => setExpandedId(expanded ? null : entry.id)}
                    >
                      <ChevronIcon />
                    </button>
                  </div>
                </div>

                {expanded ? (
                  <div className="activityPanel">
                    <div className="activityPanel__heading">RECENT ACTIVITY</div>
                    <div className="activityPanel__table" role="table" aria-label={`${entry.name} activity list`}>
                      <div className="activityPanel__head" role="row">
                        <span role="columnheader">ACTIVITY</span>
                        <span role="columnheader">CATEGORY</span>
                        <span role="columnheader">DATE</span>
                        <span role="columnheader">POINTS</span>
                      </div>

                      {getActivitiesInDescendingDateOrder(entry.matchedActivities).map((activity, activityIndex) => (
                        <div className="activityPanel__row" role="row" key={`${entry.id}-${activityIndex}`}>
                          <div className="activityPanel__activity" role="cell">
                            {activity.name}
                          </div>
                          <div className="activityPanel__category" role="cell">
                            <span className={`activityCategoryBadge activityCategoryBadge--${getCategoryClassName(activity.category)}`}>
                              {activity.category}
                            </span>
                          </div>
                          <div className="activityPanel__date" role="cell">
                            {formatActivityDate(activity.date)}
                          </div>
                          <div className="activityPanel__points" role="cell">
                            +{activity.points}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </article>
            )
          })
        ) : (
          <div className="emptyState" role="status" aria-live="polite">
            <InfoIcon />
            <span>No activities found matching the current filters.</span>
          </div>
        )}
      </section>
    </main>
  )
}

function FilterDropdown({ id, value, options, open, onToggle, onSelect }) {
  const showCategoryIcons = id === 'category'
  const valueClassName = showCategoryIcons && value !== 'All Categories' ? getCategoryClassName(value) : ''

  return (
    <div className={`filterDropdown filterDropdown--${id}${open ? ' isOpen' : ''}`}>
      <button type="button" className="filterTrigger" aria-haspopup="listbox" aria-expanded={open} onClick={onToggle}>
        <span className={`filterTrigger__label${valueClassName ? ` filterTrigger__label--${valueClassName}` : ''}`}>
          {showCategoryIcons && value !== 'All Categories' ? <CategoryIcon category={value} /> : null}
          <span>{value}</span>
        </span>
        <ChevronIcon className="filterTrigger__chevron" />
      </button>

      {open ? (
        <div className="filterMenu" role="listbox" aria-label={`${id} options`}>
          {options.map((option) => (
            <button
              key={option}
              type="button"
              className={`filterMenu__item${
                option === value ? ' isSelected' : ''
              }${showCategoryIcons && option !== 'All Categories' ? ` filterMenu__item--${getCategoryClassName(option)}` : ''}`}
              role="option"
              aria-selected={option === value}
              onClick={() => onSelect(option)}
            >
              {showCategoryIcons && option !== 'All Categories' ? <CategoryIcon category={option} /> : null}
              <span>{option}</span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}

function PodiumCard({ entry, rank, variant }) {
  return (
    <article className={`podiumCard podiumCard--${variant}`}>
      <Avatar entry={entry} size="large" rank={rank} />
      <div className="podiumCard__profile">
        <h2>{entry.name}</h2>
        <p>
          {entry.role} ({entry.code})
        </p>
        <div className="podiumCard__score">
          <StarIcon />
          <strong>{entry.total}</strong>
        </div>
      </div>
      <div className="podiumCard__base" aria-hidden="true">
        <div className="podiumCard__number">{rank}</div>
      </div>
    </article>
  )
}

function podiumVariant(rank) {
  if (rank === 1) return 'gold'
  if (rank === 2) return 'silver'
  return 'bronze'
}

function matchesSearch(searchText, searchTerm) {
  if (!searchTerm) return true

  return searchText.includes(searchTerm)
}

function buildEntrySearchText(entry) {
  return entry.name.toLowerCase()
}

function getActivitiesInDescendingDateOrder(activities) {
  return [...activities].sort((left, right) => right.date.localeCompare(left.date))
}

function buildCategoryTotals(activities) {
  const totals = Object.fromEntries(CATEGORY_NAMES.map((category) => [category, 0]))

  for (const activity of activities) {
    totals[activity.category] += activity.points
  }

  return METRIC_CATEGORY_ORDER
    .map((category) => ({
      category,
      points: totals[category],
    }))
    .filter((item) => item.points > 0)
}

function activityMatchesFilters(activity, { year, quarter, category }) {
  const matchesYear = year === 'All Years' || getActivityYear(activity.date) === year
  const matchesQuarter = quarter === 'All Quarters' || getActivityQuarter(activity.date) === quarter
  const matchesCategory = category === 'All Categories' || activity.category === category

  return matchesYear && matchesQuarter && matchesCategory
}

function getAllYears(entries) {
  return Array.from(
    new Set(entries.flatMap((entry) => entry.activities.map((activity) => getActivityYear(activity.date)))),
  ).sort((left, right) => Number(right) - Number(left))
}

function getAllQuarters(entries) {
  const quarterOrder = new Map(
    ['Q1', 'Q2', 'Q3', 'Q4'].map((quarter, index) => [quarter, index]),
  )

  return Array.from(
    new Set(entries.flatMap((entry) => entry.activities.map((activity) => getActivityQuarter(activity.date)))),
  ).sort((left, right) => quarterOrder.get(left) - quarterOrder.get(right))
}

function getActivityYear(date) {
  return new Date(`${date}T00:00:00Z`).getUTCFullYear().toString()
}

function getActivityQuarter(date) {
  const month = new Date(`${date}T00:00:00Z`).getUTCMonth()

  if (month <= 2) return 'Q1'
  if (month <= 5) return 'Q2'
  if (month <= 8) return 'Q3'
  return 'Q4'
}

function formatActivityDate(date) {
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`))
}

function getCategoryClassName(category) {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}

function Avatar({ entry, size = 'default', rank }) {
  return (
    <div className={`avatar avatar--${size} avatar--${entry.avatarTone}`}>
      <span className="avatar__text">{entry.initials}</span>
      {rank ? <span className={`avatar__rank avatar__rank--${rank}`}>{rank}</span> : null}
    </div>
  )
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="8.5" cy="8.5" r="5.1" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12.45 12.45 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path
        d="M5.5 5.5 14.5 14.5M14.5 5.5 5.5 14.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

function InfoIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <path d="M10 8.3v5" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="10" cy="6.1" r="0.8" fill="currentColor" />
    </svg>
  )
}

function ChevronIcon({ className }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className={className}>
      <path
        d="m5.5 7.75 4.5 4.75 4.5-4.75"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="m10 2.3 2.42 4.9 5.42.79-3.93 3.84.93 5.4L10 14.7l-4.84 2.55.93-5.4-3.93-3.84 5.42-.79L10 2.3Z" />
    </svg>
  )
}

function CategoryIcon({ category }) {
  if (category === 'Education') {
    return (
      <svg viewBox="0 0 20 20" aria-hidden="true">
        <path
          d="M10 3 2.5 7 10 11l7.5-4L10 3Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M5.1 8v3.4c0 .5.3.9.7 1.1L10 15l4.2-2.5c.4-.2.7-.6.7-1.1V8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (category === 'University Partnership') {
    return (
      <svg viewBox="0 0 20 20" aria-hidden="true">
        <circle cx="10" cy="10" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="7.6" cy="8.3" r="0.8" fill="currentColor" />
        <circle cx="12.4" cy="8.3" r="0.8" fill="currentColor" />
        <path
          d="M6.9 11.2c.7 1.1 1.8 1.8 3.1 1.8s2.4-.7 3.1-1.8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path
        d="M9.8 3.5c3 0 5.5 2.4 5.5 5.4 0 2.4-1.6 4.4-3.8 5.1l-.5 2H8.6l-.5-2c-2.2-.7-3.8-2.7-3.8-5.1 0-3 2.4-5.4 5.5-5.4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M7.7 9.1c.4.8 1.2 1.3 2.1 1.3s1.7-.5 2.1-1.3" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M8.4 15.2h2.8" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

export default App
