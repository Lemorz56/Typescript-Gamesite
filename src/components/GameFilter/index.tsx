import React, { ChangeEvent, ReactElement } from 'React'
import { PLATFORMS, GENRES, TAGS, SORT_BY } from './constants'
import { Form, Label, Select } from './styles'

interface Props {
	onChange: (e: ChangeEvent<HTMLFormElement>) => void
}

const GameFilter = ({ onChange }: Props): ReactElement => (
	<Form onChange={onChange}>
		<Label htmlFor="platform-Select">
			Platform:
			<Select name="platform" id="platform-Select">
				{PLATFORMS.map(platform => (
					<option key={platform.value} value={platform.value}>
						{' '}
						{platform.display}{' '}
					</option>
				))}
			</Select>
		</Label>

		<Label htmlFor="genre-Select">
			Genre:
			<Select name="genre" id="genre-Select">
				{GENRES.map(genre => (
					<option key={genre.value} value={genre.value}>
						{' '}
						{genre.display}{' '}
					</option>
				))}
			</Select>
		</Label>

		<Label htmlFor="tag-Select">
			Tag:
			<Select name="tag" id="tag-Select">
				{TAGS.map(tag => (
					<option key={tag.value} value={tag.value}>
						{' '}
						{tag.display}{' '}
					</option>
				))}
			</Select>
		</Label>

		<Label htmlFor="sortBy-Select">
			Sort By:
			<Select name="sortBy" id="sortBy-Select">
				{SORT_BY.map(sort => (
					<option key={sort.value} value={sort.value}>
						{' '}
						{sort.display}{' '}
					</option>
				))}
			</Select>
		</Label>
	</Form>
)

export default GameFilter
